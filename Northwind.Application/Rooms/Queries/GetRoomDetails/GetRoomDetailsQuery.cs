using MediatR;

namespace Northwind.Application.Rooms.Queries.GetRoomDetails
{
    public class GetRoomDetailsQuery : IRequest<RoomDetailsViewModel>
    {
        public int RoomID { get; set; }
    }
}
