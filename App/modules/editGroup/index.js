import React from 'react';
import { View, Text } from 'react-native';
import EditGroupForm from './editGroupForm';
import { connect } from 'react-redux';

const _EditGroup = ({
  group  
}) => {
    return <EditGroupForm existingGroup={group} />
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps,null)(_EditGroup);