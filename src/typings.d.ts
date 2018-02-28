declare module 'JQuery';
declare module 'lodash';
declare module 'google.analytics';

declare var jQuery:JQueryStatic;
declare var $:JQueryStatic;
declare var owlCarousel;

interface JQuery {
  owlCarousel(any):any;
}
