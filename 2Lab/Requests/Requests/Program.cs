using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Net;
using System.IO;


namespace Requests
{
    class Program
    {
        public static string text, zapros;
        static void Main(string[] args)
        {
            for (int i = 1; i <= 500; i++)
            {
                zapros = Console.ReadLine();

                string url2 = "https://search-maps.yandex.ru/v1/?text=";
                string url3 = "&results=500&lang=ru_RU&apikey=1bf0d4d0-914f-48d9-95a0-05f771f66ae1";
                string url4 = url2 + zapros + url3;
                // Адрес ресурса, к которому выполняется запрос
                // string url = "https://search-maps.yandex.ru/v1/?text=dw&type=biz&results=500&lang=ru_RU&apikey=1bf0d4d0-914f-48d9-95a0-05f771f66ae1";
                string url = url4;


                using (var writer = new StreamWriter("Запросы.txt", true))
                {
                    //Добавляем к старому содержимому файла
                    writer.WriteLine(zapros);
                }

                // Создаём объект WebClient
                using (var webClient = new WebClient())
                {
                    webClient.Encoding = Encoding.UTF8;
                    // Выполняем запрос по адресу и получаем ответ в виде строки
                    var response = webClient.DownloadString(url);

                    text = response;
                }

                Console.WriteLine(" {0}", text);
                string name_file;
                name_file = i + ".txt";

                StreamWriter SW = new StreamWriter(new FileStream(name_file, FileMode.Create, FileAccess.Write), Encoding.UTF8);
                SW.Write(text);
                SW.Close();

            }
        }
    }
}