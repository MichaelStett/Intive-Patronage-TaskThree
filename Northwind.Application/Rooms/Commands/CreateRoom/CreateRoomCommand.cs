using MediatR;
using Northwind.Domain.Entities;

namespace Northwind.Application.Rooms.Commands.CreateRoom
{
    public class CreateRoomCommand : IRequest<int>
    {
        public int RoomID { get; set; }

        public int RoomNumber { get; set; } 

        public string RenterName { get; set; }   

        public Calendar Calendar { get; set; }
    }
}
