using MediatR;

namespace Northwind.Application.Rooms.Commands.UpdateRoom
{
    public class UpdateRoomCommand : IRequest
    {
        public int RoomID { get; set; }

        public int RoomNumber { get; set; }

        public string RenterName { get; set; }   
    }
}
