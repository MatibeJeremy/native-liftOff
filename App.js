import { StatusBar } from 'expo-status-bar';
import {ImageBackground, Text, TextInput, View} from 'react-native';
import {Icon, IconButton, Stack, Surface} from "@react-native-material/core";

export default function App() {
  return (
  <ImageBackground
      source={require('./assets/background.jpg')} // Path to your background image
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }}
  >
    <View style={{
      backgroundImage: 'url(assets/background.jpg)',
    }}>
      <Surface
          elevation={1}
          category="medium"
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: '80%',
            height: '60%',
          }}
      >
          <Stack spacing={2} style={{ margin: 16 }}>
              <TextInput
                  label="Label"
                  leading={props => <Icon name="account" {...props} />}
              />
              <TextInput
                  style={{
                      width
                  }}
                  label="Label"
                  variant="outlined"
                  trailing={props => (
                      <IconButton icon={props => <Icon name="eye" {...props} />} {...props} />
                  )}
              />
              <TextInput label="Label" variant="standard" />
          </Stack>
      </Surface>
      <StatusBar style="auto" />
    </View>
  </ImageBackground>
  );
}

