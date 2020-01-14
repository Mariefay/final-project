import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";

export default class Reviews extends React.Component {
  state = {
    places: [],
    reviews: []
  };

  // async componentDidMount() {
  //   const response = await fetch(`https://2aw2ojaww1.execute-api.eu-west-2.amazonaws.com/api/safeplaces/${this.props.navigation.state.params.place_id}/reviews`);
  //   try { console.log(response); }
  //   catch {e => console.log(e)}
  // }

  render() {
    console.log(this.props.navigation.state.params);
    return (
      <View>
        <View style={styles.header}>
          <Text style={styles.name}>
            {this.props.navigation.state.params.name}
          </Text>
          <Text style={styles.address}>
            {this.props.navigation.state.params.address}
          </Text>
          <Text style={styles.address}>
            {this.props.navigation.state.params.rating}
          </Text>
        </View>
        <View style={styles.header}>
          <Text style={styles.open}>Opening Times</Text>
          {this.props.navigation.state.params.weekday_text.map(day => {
            return (
              <Text key={day} style={styles.address}>
                {day}
              </Text>
            );
          })}
        </View>
        <View style={styles.reviews}>
          <Text style={styles.open}>Reviews</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    alignSelf: "center",
    width: "90%",
    paddingTop: 20,
    paddingBottom: 30,
    borderBottomWidth: 2
  },
  name: {
    fontSize: 23,
    textAlign: "center",
    paddingBottom: 7,
    fontWeight: "bold"
  },
  address: {
    textAlign: "center"
  },
  open: {
    textAlign: "center",
    paddingBottom: 15,
    fontSize: 23
  },
  reviews: {
    alignSelf: "center",
    width: "90%",
    paddingTop: 20
  }
});