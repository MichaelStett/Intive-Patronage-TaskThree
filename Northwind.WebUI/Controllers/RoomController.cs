﻿using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Northwind.Application.Rooms.Commands.CreateRoom;
using Northwind.Application.Rooms.Commands.DeleteRoom;
using Northwind.Application.Rooms.Commands.UpdateRoom;
using Northwind.Application.Rooms.Queries.GetAllRooms;
using Northwind.Application.Rooms.Queries.GetRoomCalendar;
using Northwind.Application.Rooms.Queries.GetRoomDetails;

namespace Northwind.WebUI.Controllers
{
    public class RoomController : BaseController
    {
        // GET: api/rooms
        [HttpGet]
        public async Task<ActionResult<RoomsListViewModel>> GetAll()
        {
            return Ok(await Mediator.Send(new GetAllRoomsQuery()));
        }

        // GET: api/rooms/5
        [HttpGet("{id}")]
        public async Task<ActionResult<RoomDetailsViewModel>> Get(int id)
        {
            return Ok(await Mediator.Send(new GetRoomDetailsQuery { Id = id }));
        }

        // POST: api/rooms
        [HttpPost]
        public async Task<ActionResult<int>> Create([FromBody] CreateRoomCommand command)
        {
            var roomId = await Mediator.Send(command);

            return Ok(roomId);
        }

        // PUT: api/rooms/5
        [HttpPut("{id}")]
        public async Task<ActionResult<RoomDto>> Update([FromRoute] int id,[FromBody] UpdateRoomCommand command)
        {
            return Ok(await Mediator.Send(command));
        }

        // DELETE: api/rooms/5
        [HttpDelete("{id}")]
        [ProducesResponseType((int)HttpStatusCode.NoContent)]
        public async Task<IActionResult> Delete(int id)
        {
            await Mediator.Send(new DeleteRoomCommand { Id = id });

            return NoContent();
        }
    }
}
