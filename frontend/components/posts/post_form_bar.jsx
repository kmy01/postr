const React = require('react');
const Modal = require('react-modal');
const ModalStyle = require('./post_form_modal_style');

const SessionStore = require('../../stores/session_store');

const TextForm = require('./text_form');
const PhotoForm = require('./photo_form');
const LinkForm = require('./link_form');
const AudioForm = require('./audio_form');
const VideoForm = require('./video_form');

module.exports = React.createClass({
  getInitialState() {
    return ({ ModalStyle: ModalStyle, modalOpen: false });
  },

  componentDidMount() {
    this.form_type = ''
  },

  _openModal(form_type) {
    this.form_type = form_type;
    switch (form_type) {
      case 'text':
        this.state.ModalStyle.content.height = '412px';
        break;
      case 'link':
        this.state.ModalStyle.content.height = '371px';
        break;
      case 'photo':
      case 'audio':
      case 'video':
        this.state.ModalStyle.content.height = '241px';
        break;
    }
    this.setState({ modalOpen: true });
  },

  _closeModal() {
    this.form_type = '';
    this.setState({ modalOpen: false });
  },

  _formToShow(form_type) {
    if (form_type === 'text') {
      return <TextForm _closeModal={this._closeModal}/>;
    } else if (form_type ==='photo') {
      return (
        <PhotoForm
          _changeHeight={this._changeHeight}
          _closeModal={this._closeModal}/>
      );
    } else if (form_type ==='link') {
      return <LinkForm _closeModal={this._closeModal}/>;
    } else if (form_type ==='audio') {
      return (
        <AudioForm
          _changeHeight={this._changeHeight}
          _closeModal={this._closeModal}/>
      );
    } else if (form_type ==='video') {
      return (
        <VideoForm
          _changeHeight={this._changeHeight}
          _closeModal={this._closeModal}/>
      );
    }
  },

  _changeHeight(height) {
    ModalStyle.content.height = height;
    this.setState({
      ModalStyle: ModalStyle
    });
  },

  render() {
    return (
      <div className='forms group'>
        <img
          className='avatar'
          src={SessionStore.currentUser().avatar_url} />
        <ul className='form-icons group'>
          <li onClick={this._openModal.bind(this, 'text')}>
            <i className='text-icon' />
            <span>Text</span>
          </li>
          <li onClick={this._openModal.bind(this, 'photo')}>
            <i className='photo-icon' />
            <span>Photo</span>
          </li>
          <li onClick={this._openModal.bind(this, 'link')}>
            <i className='link-icon' />
            <span>Link</span>
          </li>
          <li onClick={this._openModal.bind(this, 'audio')}>
            <i className='audio-icon' />
            <span>Audio</span>
          </li>
          <li onClick={this._openModal.bind(this, 'video')}>
            <i className='video-icon' />
            <span>Video</span>
          </li>
        </ul>

        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this._closeModal}
          style={this.state.ModalStyle}>
          { this._formToShow(this.form_type) }
        </Modal>
      </div>
    );
  }
});
