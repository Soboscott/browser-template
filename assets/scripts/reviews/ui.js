'use strict';

const indexHandlebars = require('../templates/posts-listing.handlebars');

const success = () => {
  $('#status-box').text('Nice!');
};

const indexSuccess = (data) => {
  if (data.posts.length === 0) {
    $('#show-update-form').addClass('hidden');
    $('#message-box').html("<h3>Ain't nuthin' thar...Make one.</h3>");
  } else {
    $('#show-update-form').removeClass('hidden');
    $('#message-box').html('');
}

let postsIndexHtml = indexHandlebars({ posts: data.posts });
    $('#entry-container').html(postsIndexHtml);
};

const createSuccess = () => {
  $('#status-box').text('You got it');
  $('.create-entry-message').text('');
  $('.create-field').val('');
};

const updateSuccess = () => {
  $('#status-box').text('Good Job');
  $('.update-entry-message').text('');
  $('.update-field').val('');
  $('#update-entry').addClass('hidden');
  $('#create-entry').removeClass('hidden');
};

const failure = () => {
  $('#status-box').text('There seems to have been an error');
};

const createEntryFailure = () => {
  $('.create-entry-message').text('Please fill out all fields with the proper input');
};

const updateEntryFailure = () => {
  $('.update-entry-message').text('Please fill out all fields with the proper input');
};

const removePostSuccess = () => {
  $('#status-box').text('Entry Removed');
};

module.exports = {
  failure,
  success,
  createSuccess,
  indexSuccess,
  removePostSuccess,
  updateSuccess,
  createEntryFailure,
  updateEntryFailure,
};
