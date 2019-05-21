<?php
namespace App\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

use App\Entity\News;

class NewsController extends Controller
{

    /**
   * @Route("/news/", name="news", methods={"GET"})
   */
  public function getNews(Request $request)
  {
    $formatted;
      $news = $this->get('doctrine.orm.entity_manager')
                   ->getRepository('App:News')
                   ->findAll();

      if (empty($news))
      {
        return new JsonResponse(['message' => 'No news Found'], Response::HTTP_NOT_FOUND);
      }
      $formatted = [];
      foreach ($news as $new) {

        // $typeBmx = $this->get('doctrine.orm.entity_manager')
        //                 ->getRepository('App:TypeVelo')
        //                 ->findById($bmx->getIdTypeVelo());

        $formatted[] = [
          'id' => $new->getId(),
          'nom' => $new->getNom(),
          'libelle' => $new->getLibelle(),
          'lien' => $new->getLien(),
          'isVisible' => $new->getIsVisible(),
          'image' => $new->getImage(),
          //'type' => $typeBmx[0]->getLibelle(),
        ];
      }
    return new JsonResponse($formatted,Response::HTTP_OK);
  }

  /**
   * @Route("/news/{news_id}/", name="news_once", methods={"GET"})
   */
  public function getNewsOnce(Request $request)
  {
    $formatted =[];

        $news = $this->get('doctrine.orm.entity_manager')
                        ->getRepository('App:News')
                        ->findById($request->get('news_id'));

        if (empty($news)) {
            return new JsonResponse(['message' => 'News not found '], Response::HTTP_NOT_FOUND);
        }
        if(count($news)>1)
        {
          for($i=0;$i< count($news);$i++)
          {
            $formatted[$i]=[
                          'id' => $news[$i]->getId(),
                          'intitule' => $news[$i]->getLibelle(),
                         ];
          }
          return new JsonResponse($formatted,Response::HTTP_OK);
        }

        $formatted = [
                      'id' => $news[0]->getId(),
                      'intitule' => $news[0]->getLibelle(),
                     ];
        return new JsonResponse($formatted,Response::HTTP_OK);
  }
}