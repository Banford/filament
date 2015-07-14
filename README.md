# Filament

A demonstration app to show how a modern frontend workflow can sit alongside an existing MVC application
within visual studio.

- Doesn't use 'Content' and 'Scripts' in favor of 'dist'.
- Uses gulp instead of MVC bundling.
- Uses task runner explorer to hook gulp task running into build events.
- Used yeoman to scaffold the front end app. 'yo ko' (generator-ko)
- Removed front end dependencies from Nuget and managed them through Bower.

Next Steps

- Move 'Models' out of the web application and into a separate .Net project.
- Implement some functionality beyond hello world.
- Check gulp tasks and refine them to produce better dist.
- Demonstrate how this would work with two 'Single Page Applications' hosted within one app.

## App Structure

- Filament - Web project, the main web client application.
    - Within the 'Apps' folder live the distinct single page apps. In this example 'external' represents a single page app available to anonymous users and 'internal' represents a single page app for logged in users.

## Running the project

- Restore the Nuget Packages
- Run npm install
- Run bower install