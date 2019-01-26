using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Northwind.Application.Exceptions;
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
            var entity = await _context.Rooms.FindAsync(request.RoomID);

            if (entity == null)
            {
                throw new NotFoundException(nameof(Room), request.RoomID);
            }
            
            entity.RoomID = request.RoomID;
            entity.RoomNumber = request.RoomNumber;
            entity.RenterName = request.RenterName;

            await _context.SaveChangesAsync(cancellationToken);

            return Unit.Value;
        }
    }
}
