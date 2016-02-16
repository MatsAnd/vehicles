FROM centos:7

RUN yum update -y && yum install -y wget

RUN wget https://nodejs.org/dist/v5.6.0/node-v5.6.0-linux-x64.tar.gz -O /node.tar.gz
RUN tar --strip-components 1 -xzvf node*.tar.gz -C /usr/local

RUN mkdir /project
ADD . /project/
RUN cd /project && npm install
WORKDIR /project
EXPOSE 8080
CMD ["npm", "start"]
