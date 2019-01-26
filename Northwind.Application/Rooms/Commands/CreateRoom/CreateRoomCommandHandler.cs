using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Northwind.Persistence;

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
            var entity = new Domain.Entities.Room
            {
                RoomID = request.RoomID,
                RoomNumber = request.RoomNumber,
                RenterName = request.RenterName
            };


            
            _context.Rooms.Add(entity);

            await _context.SaveChangesAsync(cancellationToken);

            return entity.RoomID;
        }
    }
}
