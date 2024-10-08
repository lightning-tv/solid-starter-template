import { Text, View } from "@lightningtv/solid";

const TextPage = () => {
  const OverviewContainer = {
    width: 900,
    height: 500,
    y: 350,
    x: 20,
    gap: 25,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flexStart",
  } as const;

  const SublineContainer = {
    width: 900,
    height: 36,
    gap: 6,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flexStart",
  } as const;

  const Title = {
    fontSize: 42,
  } as const;

  const Overview = {
    width: OverviewContainer.width,
    fontSize: 26,
    contain: "width",
  } as const;

  const Subline = {
    fontSize: 26,
  } as const;

  return (
    <View autofocus style={OverviewContainer}>
      <Text style={Title}>Title of the Page</Text>
      <Text style={Overview}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel
        tempor tellus. Sed eu leo purus. Vestibulum sollicitudin eget tellus a
        varius. Phasellus est turpis, volutpat sed blandit sit amet, rutrum sit
        amet mauris. In dignissim elit orci, a sollicitudin ipsum faucibus et.
        Quisque vel quam rutrum, faucibus augue sed, scelerisque nunc.
      </Text>
      <View style={SublineContainer}>
        <Text style={Subline}>Subline Text</Text>
        <View width={28} height={28} src={"/assets/rt-popcorn.png"}></View>
        <Text style={Subline}>More Text</Text>
      </View>
    </View>
  );
};

export default TextPage;
