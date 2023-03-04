const start = (isCaller : boolean) => {
    const peerConnection = new RTCPeerConnection();
    peerConnection.onicecandidate = gotIceCandidate;
  
    // If we're the caller, we create the Data Channel
    // Otherwise, it opens for us and we receive an event as soon as the peerConnection opens
    if (isCaller) {
      const dataChannel = peerConnection.createDataChannel("testChannel");
      dataChannel.onmessage = handleDataChannelReceiveMessage;
      dataChannel.onopen = handleDataChannelStatusChange;
      dataChannel.onclose = handleDataChannelStatusChange;
    } else {
      peerConnection.ondatachannel = handleDataChannelCreated;
    }
  
    // Kick it off (if we're the caller)
    if (isCaller) {
      peerConnection.createOffer()
          .then(offer => peerConnection.setLocalDescription(offer))
          .then(() => console.log('set local offer description'))
          .then(() => serverConnection.send(JSON.stringify({ 'sdp': peerConnection.localDescription, 'uuid': uuid })))
          .then(() => console.log('sent offer description to remote'))
          .catch(errorHandler);
    }
}

const handleSendChannelStatusChange = (event) => {

}