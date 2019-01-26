using MediatR;

namespace Northwind.Application.Rooms.Queries.GetAllRooms
{
    public class GetAllRoomsQuery  :  IRequest<RoomsListViewModel>
    {
    }
}
