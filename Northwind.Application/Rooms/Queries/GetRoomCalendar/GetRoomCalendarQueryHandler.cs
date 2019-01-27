using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using MediatR;

namespace Northwind.Application.Rooms.Queries.GetRoomCalendar
{
    public class GetRoomCalendarQueryHandler : IRequestHandler<GetRoomCalendarQuery, RoomCalendarViewModel>
    {
        public Task<RoomCalendarViewModel> Handle(GetRoomCalendarQuery request, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }
    }
}
