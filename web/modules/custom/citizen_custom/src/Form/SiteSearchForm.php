<?php

namespace Drupal\citizen_custom\Form;

use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Routing\RouteProvider;
use Drupal\Core\Url;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Builds the search form for the search block.
 *
 * @internal
 */
class SiteSearchForm extends FormBase {

  /**
   * {@inheritdoc}
   */
  protected $routeProvider;

  /**
   * Class constructor.
   */
  public function __construct(RouteProvider $routeProvider) {
    $this->routeProvider = $routeProvider;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    // Instantiates this form class.
    return new static(
      // Load the service required to construct this class.
      $container->get('router.route_provider')
    );
  }

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'site_search_form';
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $route_match = $this->routeProvider->getRoutesByNames(['view.site_search.search_results']);

    if (count($route_match)) {
      $route = 'view.site_search.search_results';
      $form['#action'] = Url::fromRoute($route)->toString();
    }
    else {
      $form['#action'] = '/site-search';
    }
    $form['#method'] = 'get';

    $form['site_search_api_fulltext'] = [
      '#type' => 'textfield',
      '#label' => 'Search',
      '#title' => $this->t('Search'),
      '#title_display' => 'invisible',
      '#name' => 'site_search_api_fulltext',
      '#size' => 30,
      '#default_value' => '',
      '#placeholder' => 'Enter keyword(s)',
    ];

    $form['actions'] = [
      '#type' => 'actions',
      '#id' => 'edit-site-search-actions',
    ];
    $form['actions']['submit'] = [
      '#type' => 'submit',
      '#id' => 'edit-site-search-submit',
      '#value' => $this->t('Search'),
      // Prevent op from showing up in the query string.
      '#name' => '',
    ];

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {

  }

}
