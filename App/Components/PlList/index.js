import React, {Component } from 'react'
import {ListView, View, TouchableHighlight} from 'react-native';
import styles from './PlList.styles';

export default class _PlList extends Component {
    constructor(props) {
        super(props);
        this._onPress = this
            ._onPress
            .bind(this);
        this._renderRow = this
            ._renderRow
            .bind(this);
        this.state = {
            selectedRow: null
        }
    }

    _onPress(e, item) {
        this.setState({
            selectedRow: item
        })
        this.props.onPress(item);
        this.forceUpdate()
    }

    _renderRow(item) {
        return (
            <TouchableHighlight style={styles.listItem} onPress={(e) => this._onPress(e, item)}>
                <View>
                    {this
                        .props
                        .renderRow(item)}
                </View>
            </TouchableHighlight>
        )
    }

    render() {

        const rowHasChanged = (r1, r2) => (r1 !== r2 || r1 == this.state.selectedRow)
        const ds = new ListView.DataSource({rowHasChanged})
        const dataSource = ds.cloneWithRows(this.props.items);

        const _renderSepeartor = (sectionID, rowID) => {
            return <View key={`sectionID_${sectionID}_rowID_${rowID}`} style={styles.seperator}/>
        }
        return (<ListView
            renderSeparator={_renderSepeartor}
            dataSource={dataSource}
            renderRow={this._renderRow}
            contentContainerStyle={styles.listViewStyle}/>)
    }
}