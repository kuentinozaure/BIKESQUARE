<?php
namespace  App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\ManyToOne;
use Doctrine\ORM\Mapping\JoinColumn;

/**
 * @ORM\Entity()
 * @ORM\Table(name="TYPE_NEWS")
 */
class TypeNews
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue
     */
    protected $id;

    /**
     * @ORM\Column(type="string",length=255)
     */
    protected $libelle;

    public function getId()
    {
        return $this->id;
    }

    public function getLibelle()
    {
        return $this->libelle;
    }

    public function setId($id)
    {
        $this->id = $id;
        return $this;
    }
    public function setLibelle($libelle)
    {
        $this->libelle = $libelle;
        return $this;
    }
    public function setLien($lien)
    {
        $this->lien = $lien;
        return $this;
    }

    public function setTitre($titre)
    {
        $this->titre = $titre;
        return $this;
    }

    public function setIsVisible($isVisible)
    {
        $this->isVisible = $isVisible;
        return $this;
    }
    public function setIdTypeNews($idTypeNews){
        $this->idTypeNews = $idTypeNews;
        return $this;
    }
}
