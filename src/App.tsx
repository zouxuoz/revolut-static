import React from "react";
import { Root } from "react-static";
import {
  ThemeProvider,
  UnifiedTheme,
  Button,
  Avatar,
  Header,
  Box,
} from "@revolut/ui-kit";
import * as Icons from "@revolut/icons";

import "./app.css";

function App() {
  return (
    <Root>
      <ThemeProvider theme={UnifiedTheme} mode="dark">
        <Box flex={1} bg="background" color="foreground" p="s-16">
          <Header variant="item">
            <Header.BackButton />
            <Header.Title>Item</Header.Title>
            <Header.Avatar>
              <Avatar size={56}>AA</Avatar>
            </Header.Avatar>
            <Header.Subtitle>Subtitle</Header.Subtitle>
            <Header.Description>Description</Header.Description>
            <Header.ActionBar>
              <Button variant="secondary" size="sm" useIcon={Icons.Revolut}>
                Action 1
              </Button>
              <Button variant="secondary" size="sm" useIcon={Icons.Revolut}>
                Action 2
              </Button>
              <Button
                variant="secondary"
                size="sm"
                useIcon={Icons.Revolut}
                hide="*-md"
              >
                Action 3
              </Button>
            </Header.ActionBar>
          </Header>
        </Box>
      </ThemeProvider>
    </Root>
  );
}

export default App;
