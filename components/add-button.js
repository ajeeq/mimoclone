export default function AddButton ({ onPress }) {
  <Fab
      direction="up"
      containerStyle={{}}
      style={{ backgroundColor: lightBlue }}
      position="bottomRight"
      onPress={onPress}
  >
      <Icon name="add" />
  </Fab>
}