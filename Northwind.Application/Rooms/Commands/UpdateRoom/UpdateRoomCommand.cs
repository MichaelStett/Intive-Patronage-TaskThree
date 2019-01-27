using MediatR;
using Northwind.Domain.Entities;
using System;
using System.Collections.Generic;

namespace Northwind.Application.Rooms.Commands.UpdateRoom
{
    public class UpdateRoomCommand : IRequest
    {
        public UpdateRoomCommand()
        {
            Calendar = new List<Calendar>();
        }

        public int Id { get; set; }

        public int Number { get; set; }

        public ICollection<Calendar> Calendar { get; set; }
    }
}
