using MediatR;
using Northwind.Domain.Entities;

namespace Northwind.Application.Rooms.Commands.CreateRoom
{
    public class CreateRoomCommand : IRequest<int>
    {
        public CreateRoomCommand()
        {
            Calendar = new Calendar();
        }
        public int Id { get; set; }

        public int Number { get; set; } 

        public Calendar Calendar { get; set; }
    }
}
