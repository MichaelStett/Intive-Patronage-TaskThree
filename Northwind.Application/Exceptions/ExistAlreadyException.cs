using System;

namespace Northwind.Application.Exceptions
{
    class ExistAlreadyException : Exception
    {
        public ExistAlreadyException(string name, object key, string message)
            : base($"Entity \"{name}\" ({key}) exist already. {message}")
        {
        }
    }
}
