"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Content {
    content(req, res) {
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
        const a = 5; // number 64 bites lebegőponto szám
        const b = 5;
        res.write(`<h2>a=${a * b}</h2>`);
        res.write("</body>");
        res.write("</html>");
        res.end();
    }
}
exports.default = Content;
//# sourceMappingURL=content.js.map