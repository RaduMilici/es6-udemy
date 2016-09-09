'use strict';

var post = { id: 4, title: 'New post' };
var comments = [{ postId: 4, content: 'awesome post' }, { postId: 3, content: 'it was ok' }, { postId: 4, content: 'meh' }];

function commentsForPost(post, comments) {
  return comments.filter(function (comment) {
    return post.id === comment.postId;
  });
}

var filteredComments = commentsForPost(post, comments);
console.log(filteredComments); // [{awesome post}, {meh}]