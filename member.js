function skillsMember(){
    return {
        restricted: true,
        templateUrl: 'app/components/member/member.html',
        controller: 'MemberController',
        controllerAs: 'memberCtrl',
        bindToController: true,
        scope: {
            member: '='
        }
    };
}