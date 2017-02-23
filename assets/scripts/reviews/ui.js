'use strict';


const indexReviewsHandlerbars = require('../templates/helpers/index-climbs.handlebars');
const indexSuccess = (data) => {
  $('.update-delete-container').css('display', 'unset');
  $('.index').css('display', 'unset');
  let indexReviewsHtml = indexreviewsHandlerbars({
    climbs: data.climbs
  });
  $('.table-striped').html(indexReviewsHtml);
};

const indexFailure = () => {};
const createSuccess = (data) => {
  // console.log(data.book);
  $('.clear-input-create').val('');
  $('#createClimbModal').modal('hide');
  $('#dropdownMenuButton').find('option:first').attr('selected', 'selected');
};

const createFailure = (data) => {
  // console.log(data);
};

const updateSuccess = (id) => {
  // console.log(id);
  $('.updateReviewModal' + id).modal('toggle');
  $('.modal-backdrop').remove();
};

const updateFailure = (data) => {
  // console.log(data);
};

const destroySuccess = (pass) => {
  // console.log(data);
  $('.destroyReviewModal' + pass).modal('toggle');
  $('.modal').modal('hide');
};

const destroyFailure = (data) => {
  // console.log(data);
};

module.exports = {
  indexSuccess,
  indexFailure,
  // showSuccess,
  // showFailure,
  createSuccess,
  createFailure,
  updateSuccess,
  updateFailure,
  destroySuccess,
  destroyFailure,
};
