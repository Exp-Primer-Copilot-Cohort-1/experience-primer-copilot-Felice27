function skillsMember() {
  return {
    restrict: 'E',
    scope: {
      member: '='
    },
    templateUrl: 'views/directives/member.html'
  };
}