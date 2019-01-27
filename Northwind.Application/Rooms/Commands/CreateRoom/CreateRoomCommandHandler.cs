using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Northwind.Persistence;
using Northwind.Application.Notification;
using Northwind.Domain.Entities;
using Northwind.Application.Exceptions;

namespace Northwind.Application.Rooms.Commands.CreateRoom
{

    public class CreateRoomCommandHandler : IRequestHandler<CreateRoomCommand, int>
    {
        private readonly NorthwindDbContext _context;

        public CreateRoomCommandHandler(NorthwindDbContext context)
        {
            _context = context;
        }

        public async Task<int> Handle(CreateRoomCommand request, CancellationToken cancellationToken)
        {
            var check = _context.Rooms.FindAsync(request.Id);
            if (check != null){
                throw new ExistAlreadyException(
                    nameof(Room), 
                    request.Id, 
                    "Already in database!");
            }

            var entity = new Room
            {
                Id = request.Id,
                Number = request.Number       
            };       
            
            entity.Calendar.Add(new Calendar
            {
                BookedTime = DateTime.Now,
                SinceTime = request.Calendar.SinceTime,
                UntilTime = request.Calendar.UntilTime,
                RenterName = request.Calendar.RenterName                    
            });

            _context.Rooms.Add(entity);

            await _context.SaveChangesAsync(cancellationToken);

            //Mail
            string subject = "Get Command Used";
            string body = "Created new room";
            Mail.SendMail(subject, body);

            return entity.Id;
        }
    }
}
