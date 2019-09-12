import * as fs from "fs";
import * as http from "http";
import * as path from "path";

export default class Content {

    public content(req: http.IncomingMessage, res: http.ServerResponse): void {
        // favicon.ico kérés kiszolgálása:
        // if (req.url === "/favicon.ico") {
        //     res.writeHead(200, { "Content-Type": "image/x-icon" });
        //     fs.createReadStream("favicon.ico").pipe(res);
        //     return;
        // }

        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write("<!DOCTYPE html>");
        res.write("<html lang = 'hu'>");
        // Weboldal fejrésze
        res.write("<head>");
        res.write("<title>TéglalapTK</title>");

        res.write("</head>");
        res.write("<body>");
        res.write("<h1> Téglalap kerülete és terüelte </h1>");
        const a: number = 5; // number 64 bites lebegőponto szám
        const b: number = 5;
        res.write(`<h2>a=${a * b}</h2>`);
        res.write("</body>");
        res.write("</html>");
        res.end();
    }
}
