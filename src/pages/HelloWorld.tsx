import { Text, View } from "@lightningtv/solid";
import styles from "../styles";

const HelloWorld = () => {
  return (
    <>
      <View src="assets/solid.svg" width={800} height={600} x={1920 / 2 - 400} y={1080 / 2 - 300} />
      <Text autofocus style={styles.headlineText}>
        Hello World!
      </Text>
      <Text style={styles.headlineSubText}>T for Text pages, M for here</Text>
    </>
  );
};

export default HelloWorld;
