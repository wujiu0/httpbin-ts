export default defineEventHandler((event) => {
  event.node.res.setHeader("content-type", "application/xml");
  
  return `<?xml version='1.0' encoding='us-ascii'?>
<!--  A SAMPLE set of slides  -->
<slideshow 
    title="Sample Slide Show"
    date="Date of publication"
    author="Yours Truly"
    >
    <slide type="all">
      <title>Wake up to WonderWidgets!</title>
    </slide>

    <slide type="all">
        <title>Overview</title>
        <item>Why <em>WonderWidgets</em> are great</item>
        <item/>
        <item>Who <em>buys</em> WonderWidgets</item>
    </slide>
</slideshow>`;
});
