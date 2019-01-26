using Northwind.Application.Interfaces.Mapping;
using Northwind.Domain.Entities;
using AutoMapper;
using System.Collections.Generic;
using System.Collections.ObjectModel;

namespace Northwind.Application.Rooms.Queries.GetAllRooms
{
    public class RoomDto : IHaveCustomMapping
    {
        public RoomDto()
        {
            Calendar = new Collection<Calendar>();
        }

        public int Id { get; set; }
        public int Number { get; set; }
        public ICollection<Calendar> Calendar { get; private set; }

        public void CreateMappings(Profile configuration)
        {
            configuration.CreateMap<Room, RoomDto>();
        }
    }
}
