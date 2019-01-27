using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Northwind.Application.Exceptions;
using Northwind.Application.Notification;
using Northwind.Domain.Entities;    
using Northwind.Persistence;

namespace Northwind.Application.Rooms.Commands.UpdateRoom
{
    public class UpdateRoomCommandHandler : IRequestHandler<UpdateRoomCommand>
    {
        private readonly NorthwindDbContext _context;

        public UpdateRoomCommandHandler(NorthwindDbContext context)
        {
            _context = context;
        }

        public async Task<Unit> Handle(UpdateRoomCommand request, CancellationToken cancellationToken)
        {
            var entity = await _context.Rooms.FindAsync(request.Id);

            if (entity == null)
            {
                throw new NotFoundException(nameof(Room), request.Id);
            }
            
            entity.Id = request.Id;
            entity.Number = request.Number;
            
            foreach(var date in request.Calendar)
            {
                entity.Calendar.Add(new Calendar
                {
                    BookedTime = DateTime.Now,
                    SinceTime = date.SinceTime,
                    UntilTime = date.UntilTime,
                    RenterName = date.RenterName                    
                });
            }
            
            
            await _context.SaveChangesAsync(cancellationToken);

            //Mail
            string subject = "Update Command Used";
            string body = $"Updated room on Id: {request.Id}";
            Mail.SendMail(subject, body);

            return Unit.Value;
        }
    }
}
