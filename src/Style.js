export default {
    input: {
        containerStyle: {
            marginBottom: 10,
        },
        inputStyle: {
            height: 46
        }
    },
    textstyle: {
        marginTop: 5,
        marginLeft: 10,
        fontSize: 16,
    },
    errortextstyle: {
        marginTop: 3,
        marginLeft: 10,
        fontSize:12 ,
        color: 'red'
    },
    selectstyle: {
        borderRadius: 5,
        borderBottomWidth: 1,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        paddingHorizontal: 10,
        borderColor: 'black',
        marginLeft:5,
        marginRight:5 ,
        marginBottom: 10,
    },
    button: {
        containerStyle: {
            paddingHorizontal: 10,
            marginTop: 10,
        }
    },
    container: {
        alignItems: 'center',
        backgroundColor: '#fff',
        display: 'flex',
        flex: 1,
        height: '100%',
        justifyContent: 'center'
    },
    header: {
        fontSize: 25,
        textAlign: "center",
        margin: 10,
        fontWeight: "bold"
    },
    modalcontainer: {
        flex: 1,
        justifyContent: 'center',
      },
        loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  popup: {
    backgroundColor: 'white',
    marginTop: 80,
    marginHorizontal: 20,
    borderRadius: 7,
  },
  popupOverlay: {
    backgroundColor: "#00000057",
    flex: 1,
    marginTop: 10
  },
  popupContent: {
    //alignItems: 'center',
    margin: 5,
    height:350,
  },
  popupHeader: {
    marginBottom: 45
  },
  popupButtons: {
    marginTop: 15,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: "#eee",
    justifyContent:'center'
  },
  popupButton: {
    flex: 1,
    marginVertical: 16
  },
  btnClose:{
    height:20,
    backgroundColor:'#20b2aa',
    padding:20
  },
  modalInfo:{
    alignItems:'center',
    justifyContent:'center',
  }
};