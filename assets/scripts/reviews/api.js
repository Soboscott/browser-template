'use strict';

const config = require('../config');
const store = require('../store');

const getIndex = function () {
  return $.ajax({
    url: config.apiOrigin + '/reviews',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
  });
};

const create = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/reviews',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    data,
  });
};

const update = function (id, data) {
  return $.ajax({
    url: config.apiOrigin + '/reviews/' + id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    data,
  });
};

const destroy = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/reviews/' + id,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
  });
};

module.exports = {
  getIndex,
  create,
  update,
  destroy,
};
