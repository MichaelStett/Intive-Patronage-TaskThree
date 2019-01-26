﻿using MediatR;

namespace Northwind.Application.Rooms.Commands.DeleteRoom
{
    public class DeleteRoomCommand : IRequest
    {
        public int RoomID { get; set; }
    }
}
