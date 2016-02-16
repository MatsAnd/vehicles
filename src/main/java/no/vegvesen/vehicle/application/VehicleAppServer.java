package no.vegvesen.vehicle.application;

import org.eclipse.jetty.server.Handler;
import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.server.handler.HandlerList;
import org.eclipse.jetty.server.handler.MovedContextHandler;
import org.eclipse.jetty.server.handler.ShutdownHandler;
import org.eclipse.jetty.util.resource.Resource;
import org.eclipse.jetty.webapp.WebAppContext;

public class VehicleAppServer {

    public static void main(String[] args) throws Exception {
        new VehicleAppServer().start();
    }

    private void start() throws Exception {
        Server server = new Server(getHttpPort());
        server.setHandler(createHandlers());
        server.start();
    }

    private Handler createHandlers() {
        HandlerList handlers = new HandlerList();
        handlers.addHandler(new ShutdownHandler("sgds", false, true));
        handlers.addHandler(createWebAppContext("/vehicles"));
        handlers.addHandler(new MovedContextHandler(null, "/", "/vehicles"));

        return handlers;
    }

    private Handler createWebAppContext(String contextPath) {
        WebAppContext context = new WebAppContext();
        context.setContextPath(contextPath);
        context.setBaseResource(Resource.newClassPathResource("/vehicle-web"));
        avoidFileLocking(context);
        return context;
    }

    private void avoidFileLocking(WebAppContext context) {
        context.setInitParameter("org.eclipse.jetty.servlet.Default.useFileMappedBuffer", "false");
    }

    private int getHttpPort() {
        if (System.getenv("PORT") != null) {
            return Integer.parseInt(System.getenv("PORT"));
        }
        return 8000;
    }

}
