<?php
namespace App\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

use App\Entity\Velo;

class BmxController extends Controller
{

    /**
   * @Route("/bmx/", name="bmx", methods={"GET"})
   */
  public function getBmxs(Request $request)
  {
    $formatted;
      $bmxs = $this->get('doctrine.orm.entity_manager')
                   ->getRepository('App:Velo')
                   ->findAll();

      if (empty($bmxs))
      {
        return new JsonResponse(['message' => 'No Bmx Found'], Response::HTTP_NOT_FOUND);
      }
      $formatted = [];
      foreach ($bmxs as $bmx) {

        $typeBmx = $this->get('doctrine.orm.entity_manager')
                        ->getRepository('App:TypeVelo')
                        ->findById($bmx->getIdTypeVelo());

        $formatted[] = [
          'id' => $bmx->getId(),
          'titre' => $bmx->getTitre(),
          'libelle' => $bmx->getLibelle(),
          'prix' => $bmx->getPrix(),
          'image' => $bmx->getImage(),
          'type' => $typeBmx[0]->getLibelle(),
        ];
      }
    return new JsonResponse($formatted,Response::HTTP_OK);
  }

  /**
   * @Route("/bmx/{bmx_id}/", name="bmx_once", methods={"GET"})
   */
  public function getBmxOnce(Request $request)
  {
    $formatted =[];

        $Bmxs = $this->get('doctrine.orm.entity_manager')
                        ->getRepository('App:Velo')
                        ->findById($request->get('bmx_id'));

        if (empty($Bmxs)) {
            return new JsonResponse(['message' => 'BMX not found for this type'], Response::HTTP_NOT_FOUND);
        }
        if(count($Bmxs)>1)
        {
          for($i=0;$i< count($Ufrs);$i++)
          {
            $formatted[$i]=[
                          'id' => $Bmxs[$i]->getId(),
                          'intitule' => $Bmxs[$i]->getLibelle(),
                         ];
          }
          return new JsonResponse($formatted,Response::HTTP_OK);
        }

        $formatted = [
                      'id' => $Bmxs[0]->getId(),
                      'intitule' => $Bmxs[0]->getLibelle(),
                     ];
        return new JsonResponse($formatted,Response::HTTP_OK);
  }
}
