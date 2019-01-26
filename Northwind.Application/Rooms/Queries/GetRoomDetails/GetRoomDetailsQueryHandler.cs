using System.Threading;
using System.Threading.Tasks;
using MediatR;

namespace Northwind.Application.Rooms.Queries.GetRoomDetails
{
    public class GetRoomDetailsQueryHandler : IRequestHandler<GetRoomDetailsQuery, RoomDetailsViewModel>
    {
        public Task<RoomDetailsViewModel> Handle(GetRoomDetailsQuery request, CancellationToken cancellationToken)
        {
            throw new System.NotImplementedException();
        }
    }
}
