using System.Collections.Generic;

namespace Northwind.Application.Rooms.Queries.GetAllRooms
{
    public class RoomsListViewModel
    {
        public IEnumerable<RoomDto> Rooms { get; set; }

        public bool CreateEnabled { get; set; }
    }
}
