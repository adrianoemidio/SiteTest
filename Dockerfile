FROM alpine:3.16.0 AS builder

RUN apk update

RUN apk add lighttpd openrc --no-cache

RUN mkdir -p /var/www/localhost/htdocs /var/log/lighttpd /var/lib/lighttpd

RUN sed -i -r 's#\#.*server.port.*=.*#server.port          = 12345#g' /etc/lighttpd/lighttpd.conf

RUN sed -i -r 's#\#.*server.event-handler = "linux-sysepoll".*#server.event-handler = "linux-sysepoll"#g' /etc/lighttpd/lighttpd.conf

RUN mkdir -p /var/lib/lighttpd

RUN chown -R lighttpd:lighttpd /var/www/localhost/

RUN chown -R lighttpd:lighttpd /var/lib/lighttpd

RUN chown -R lighttpd:lighttpd /var/log/lighttpd

RUN rc-update add lighttpd default

RUN echo "it works" > /var/www/localhost/htdocs/index.html

#RUN rc-service lighttpd restart

EXPOSE 12345

#WORKDIR /home/static

# Copy the static website
# Use the .dockerignore file to control what ends up inside the image!
#COPY . .

CMD ["lighttpd", "-D", "-f", "/etc/lighttpd/lighttpd.conf"]