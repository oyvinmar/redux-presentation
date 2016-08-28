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
  Code,
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
  fluxSimple: require("../assets/flux.png"),
  fluxSimpleDiagram: require("../assets/flux-simple-diagram.png"),
  mvcSimple: require("../assets/mvc1.png"),
  mvcComplex: require("../assets/mvc2.png")
};

preloader(images);

const theme = createTheme({
  primary: "#009682",
  secondary: "#424242",
  tertiary: "#FDFDFD",
  quartenary: "white"
});

theme.screen.components.codePane.pre.fontSize = "1.5rem";
theme.screen.components.image.margin = "1.5rem auto";
theme.screen.components.listItem.fontSize = "3.5rem";
theme.screen.components.listItem.fontWeight = "500";

const AppearListItem = ({children}) => <Appear><ListItem>{children}</ListItem></Appear>;

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide"]} transitionDuration={500}>
          <Slide bgColor="primary">
            <Heading size={1} fit caps lineHeight={1}>
              Redux
            </Heading>
            <Heading size={1} fit textColor="secondary">
              What, Why, How and some awesomeness
            </Heading>
            <Link href="https://github.com/oyvinmar/redux-presentation">
              <Text textColor="tertiary">View on Github</Text>
            </Link>
          </Slide>
          <Slide >
            <Heading size={1} caps fit textColor="secondary">
              Background
            </Heading>
              <List textColor="tertiary">
                <AppearListItem>Evolves the ideas of <b>FLUX</b></AppearListItem>
                <AppearListItem>Simplifies complexity by taking cues from <b>Elm</b></AppearListItem>
                <AppearListItem>Created by <b>Dan Abramov</b> and Andrew Chen</AppearListItem>
              </List>
          </Slide>
          <Slide bgColor="tertiary" notes="Bidirectional data flow between models and views">
            <Heading size={2} textColor="secondary">
              MVC (in theory)
            </Heading>
            <Image width="70%" src={images.mvcSimple}/>
          </Slide>
          <Slide bgColor="tertiary">
            <Heading size={2} textColor="secondary">
              MVC (in practice)
            </Heading>
            <Image width="70%" src={images.mvcComplex}/>
          </Slide>
          <Slide bgColor="primary">
            <Heading size={2} textColor="secondary">
              Flux (in theory)
            </Heading>
            <Image width="70%" src={images.fluxSimple}/>
          </Slide>
          <Slide bgColor="tertiary">
            <Heading size={2} textColor="secondary">
              Flux (in practice)
            </Heading>
            <Image width="70%" src={images.fluxSimple}/>
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary">
            <BlockQuote>
              <Quote>Predictable state container for JavaScript apps</Quote>
              <Cite>Redux documentation</Cite>
            </BlockQuote>
          </Slide>
          <Slide bgColor="primary">
            <Heading size={2} textColor="tertiary">
              Why Redux?
            </Heading>
            <List textColor="secondary">
              <AppearListItem>Separation of concerns</AppearListItem>
              <AppearListItem>Driven by functional programming principles</AppearListItem>
              <AppearListItem>Ace developer experience</AppearListItem>
              <AppearListItem>Mostly framework agnostic</AppearListItem>
            </List>
          </Slide>
          <Slide bgColor="secondary">
            <Heading size={1} fit textColor="primary" textFont="primary">
              Redux described by three principles
            </Heading>
            <List textColor="tertiary">
              <AppearListItem>Single source of truth</AppearListItem>
              <AppearListItem>State is only changed by emitting and action</AppearListItem>
              <AppearListItem>Mutations described by pure functions</AppearListItem>
            </List>
          </Slide>
          <Slide bgColor="secondary">
            <Heading size={1} textColor="primary" textFont="primary">
              Redux basics
            </Heading>
            <List textColor="tertiary">
              <AppearListItem>Actions</AppearListItem>
              <AppearListItem>Reducers</AppearListItem>
              <AppearListItem>Store</AppearListItem>
            </List>
          </Slide>
          <Slide bgColor="secondary">
            <Heading size={1} textColor="primary" textFont="primary">
              Actions
            </Heading>
            <Text textColor="tertiary">Actions are payloads of information that send data from your application to your store. They are the only source of information for the store.</Text>
          </Slide>
          <Slide bgColor="primary">
            <Heading size={2} textColor="secondary" textFont="primary">
              Actions example
            </Heading>
            <CodePane lang="js" source={require("raw!../assets/action.example")} margin="20px auto" />
          </Slide>
          <Slide bgColor="secondary">
            <Heading size={2} textColor="primary" textFont="primary">
              Reducers
            </Heading>
            <Text textColor="tertiary">Reducers specify how the application's state changes in response to actions</Text>
          </Slide>
          <Slide bgColor="primary">
            <Heading size={6} textColor="secondary" textFont="primary">
              Reducers are pure functions
            </Heading>
            <Code bgColor="primary" textColor="tertiary">(previousState, action) => newState</Code>
          </Slide>
          <Slide bgColor="secondary">
            <Heading size={1} textColor="primary" textFont="primary">
              Reducers rules
            </Heading>
            <List textColor="tertiary">
              <AppearListItem>Never mutate its arguments</AppearListItem>
              <AppearListItem>Never preform side effect (like API calls)</AppearListItem>
              <AppearListItem>Never call non-pure function {`(like Date.now())`} </AppearListItem>
            </List>
          </Slide>
          <Slide bgColor="primary">
            <Heading size={1} caps textColor="secondary" textFont="primary">
              Reducer example
            </Heading>
            <CodePane lang="js" source={require("raw!../assets/reducer.example")} margin="20px auto" />
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="primary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="secondary">
              That's all folks
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
