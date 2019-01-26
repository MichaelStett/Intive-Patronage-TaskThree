using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Mail;
using System.Text;

namespace Northwind.Application.Notification
{
    public class Mail
    {
        public static void SendMail(string subjectS, string bodyS)
        {
            var fromAddress = new MailAddress("kappanotifyservice@gmail.com", "Kappa Test");
            var toAddress = new MailAddress("michaltymejczyk@gmail.com", "Michal Tymejczyk");
            string fromPassword = "Kappa123$";
            string subject = subjectS;
            string body = bodyS;

            var smtp = new SmtpClient
            {
                Host = "smtp.gmail.com",
                Port = 587,
                EnableSsl = true,
                DeliveryMethod = SmtpDeliveryMethod.Network,
                UseDefaultCredentials = false,
                Credentials = new NetworkCredential(fromAddress.Address, fromPassword)
            };

            var message = new MailMessage(fromAddress, toAddress)
            {
                Subject = subject,
                Body = body
            };

            using (message)
            {
                smtp.Send(message);
            }
        }
    }
}
