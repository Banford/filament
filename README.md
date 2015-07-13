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