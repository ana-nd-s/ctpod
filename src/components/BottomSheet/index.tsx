import {KeyboardAvoidingView, Modal, StyleSheet, View} from 'react-native';

import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface IBottomSheetProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const BootomSheet: React.FC<IBottomSheetProps> = props => {
  const {open, onClose, children} = props;
  const insets = useSafeAreaInsets();

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={open}
      onRequestClose={onClose}>
      <View style={styles.centeredView}>
        <KeyboardAvoidingView
          behavior="padding"
          enabled
          style={{...styles.modalView, paddingBottom: insets.bottom}}>
          {children}
        </KeyboardAvoidingView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(9, 9, 9, 0.90)',
  },
  modalView: {
    backgroundColor: 'white',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default BootomSheet;
