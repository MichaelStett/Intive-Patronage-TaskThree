using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Northwind.Persistence;
using Northwind.Application.Exceptions;
using Northwind.Domain.Entities;
using Northwind.Application.Notification;

namespace Northwind.Application.Rooms.Commands.DeleteRoom
{
    public class DeleteRoomCommandHandler : IRequestHandler<DeleteRoomCommand>
    {
        private readonly NorthwindDbContext _context;

        public DeleteRoomCommandHandler(NorthwindDbContext context)
        {
            _context = context;
        }

        public async Task<Unit> Handle(DeleteRoomCommand request, CancellationToken cancellationToken)
        {
            var entity = await _context.Rooms.FindAsync(request.RoomID);

            if (entity == null)
            {
                throw new NotFoundException(nameof(Room), request.RoomID);
            }

            _context.Rooms.Remove(entity);

            await _context.SaveChangesAsync(cancellationToken);

            //Mail
            string subject = "Delete Command Used";
            string body = $"Deleted room on Id: {request.RoomID}";
            Mail.SendMail(subject, body);

            return Unit.Value;
        }
    }
}
