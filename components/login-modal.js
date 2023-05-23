import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default LoginModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        // onRequestClose={() => {
        //   Alert.alert('Modal has been closed.');
        //   setModalVisible(!modalVisible);
        // }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.textStyle}>Confirm</Text>
            <Text style={{ marginTop: 14, lineHeight: 18}}>If you log in to an existing account, your current progress will be lost. Are you sure you want to continue?</Text>

            <View style={{ position:'absolute', flexDirection: 'row', bottom: 20, right: 20 }}>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <Text style={{ color: '#242746', fontSize: 14, fontWeight: 900 }}>CANCEL</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={{ paddingLeft: 40 }}>
              <Text style={{ color: '#242746', fontSize: 14, fontWeight: 900 }}>CONTINUE</Text>
              </TouchableOpacity>
            </View>
            
          </View>
        </View>
      </Modal>

      <TouchableOpacity
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>LOG IN</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
  },
  modalView: {
    // margin: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    height: 180,
    width: 340,
    padding: 24,
    // paddingVertical: 35,
    // paddingHorizontal: 10,
    alignItems: 'flex-start',
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    // elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: '#242746',
    fontSize: 18,
    fontWeight: 900
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});