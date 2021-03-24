import React, { Component } from "react";
import { connect } from "react-redux";

import Person from "../components/Person/Person";
import AddPerson from "../components/AddPerson/AddPerson";
import * as actionTypes from "../store/actionTypes";

class Persons extends Component {
  state = {
    persons: [],
  };

  personDeletedHandler = (personId) => {
    this.setState((prevState) => {
      return {
        persons: prevState.persons.filter((person) => person.id !== personId),
      };
    });
  };

  render() {
    return (
      <div>
        <AddPerson personAdded={this.props.onAddPerson} />
        {this.props.persons.map((person) => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.personDeletedHandler(person.id)}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    persons: state.persons,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddPerson: () => dispatch({ type: actionTypes.ADD_PERSON }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
