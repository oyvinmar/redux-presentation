// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Heading,
  Image,
  Link,
  ListItem,
  List,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  fluxDiagram: require("../assets/flux-diagram.png"),
  fluxSimpleDiagram: require("../assets/flux-simple-diagram.png")
};

preloader(images);

const theme = createTheme({
  primary: "#ff4081"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide"]} transitionDuration={500}>
          <Slide bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Redux
            </Heading>
            <Heading size={1} fit>
              What, Why, How and some awesomeness
            </Heading>
            <Link href="https://github.com/oyvinmar/redux-presentation">
              <Text textColor="tertiary">View on Github</Text>
            </Link>
          </Slide>
          <Slide bgColor="black">
            <Heading size={1} caps fit textColor="primary" textFont="primary">
              Background
            </Heading>
            <Appear fid="1">
              <List textColor="primary">
                <ListItem>Evolves the ideas of <b>FLUX</b></ListItem>
                <ListItem>Simplifies complexity by taking cues from <b>Elm</b></ListItem>
                <ListItem>Created by <b>Dan Abramov</b> and Andrew Chen</ListItem>
              </List>
            </Appear>
          </Slide>
          <Slide bgColor="primary">
            <Heading size={1} caps textColor="black" textFont="primary">
              Flux
            </Heading>
            <Text textColor="tertiary">Unidirectional data flow</Text>
            <Image width="100%" src={images.fluxSimpleDiagram}/>
          </Slide>
          <Slide bgColor="primary">
            <Heading size={1} caps textColor="black" textFont="primary">
              MVC
            </Heading>
            <Text textColor="tertiary">Bidirectional data flow between models and views</Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote>Predictable state container for JavaScript apps</Quote>
              <Cite>Redux documentation</Cite>
            </BlockQuote>
          </Slide>
          <Slide bgColor="black">
            <Heading size={1} fit textColor="primary" textFont="primary">
              Why Redux?
            </Heading>
            <Appear fid="1">
              <List textColor="primary">
                <ListItem>Separation of concerns</ListItem>
                <ListItem>Driven by functional programming principles</ListItem>
                <ListItem>Ace developer experience</ListItem>
                <ListItem>Mostly framework agnostic</ListItem>
              </List>
            </Appear>
          </Slide>
          <Slide bgColor="black">
            <Heading size={1} fit textColor="primary" textFont="primary">
              Redux principles
            </Heading>
            <Appear fid="1">
              <List textColor="primary">
                <ListItem>Single source of truth</ListItem>
                <ListItem>State is only changed by emitting and action</ListItem>
                <ListItem>Mutations described by pure functions</ListItem>
              </List>
            </Appear>
          </Slide>
          <Slide bgColor="primary">
            <Heading size={1} caps textColor="black" textFont="primary">
              Actions
            </Heading>
            <CodePane lang="js" source={require("raw!../assets/action.example")} margin="20px auto" />
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              That's all folks
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
